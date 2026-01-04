import { useState, useRef } from "react";
import axios from "axios";
import './ScanPage.css';

const API_BASE_URL = "http://localhost:3001/api";

function ScanPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previewImage, setPreviewImage] = useState(null);
  const [followUpQuestion, setFollowUpQuestion] = useState('');
  const [conversationId, setConversationId] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("Image too large. Please select an image smaller than 10MB.");
      return;
    }

    const reader = new FileReader();
    reader.onloadstart = () => setUploadProgress(0);
    reader.onprogress = (e) => {
      if (e.lengthComputable) {
        setUploadProgress((e.loaded / e.total) * 100);
      }
    };

    reader.onloadend = async () => {
      const imageSrc = reader.result;
      setPreviewImage(imageSrc);
      setIsAnalyzing(true);
      setUploadProgress(0);
      setChatHistory([]);
      setResult(null);

      try {
        const imageResponse = await axios.post(
          `${API_BASE_URL}/image`,
          { imageBase64: imageSrc },
          { timeout: 45000 }
        );

        const chatMessage = `Analyze these product ingredients and provide a health assessment:\n\n${imageResponse.data.ingredients}\n\nProvide: 1) Quick verdict (✅/⚠️/❌), 2) Key concerns, 3) Health impact`;

        const chatResponse = await axios.post(`${API_BASE_URL}/chat`, {
          message: chatMessage,
          conversationId: conversationId,
        });

        setConversationId(chatResponse.data.conversationId);

        const analysis = parseAnalysis(chatResponse.data.response);
        
        setResult({
          ingredients: imageResponse.data.ingredients,
          analysis: chatResponse.data.response,
          parsed: analysis,
        });

        setChatHistory([
          { role: 'user', content: 'Analyze ingredients' },
          { role: 'assistant', content: chatResponse.data.response }
        ]);
      } catch (error) {
        console.error("Error processing image:", error);
        setResult({
          error: "Failed to analyze image. Please try again with a clearer photo.",
        });
      } finally {
        setIsAnalyzing(false);
        setUploadProgress(0);
      }
    };

    reader.readAsDataURL(file);
    e.target.value = null;
  };

  const parseAnalysis = (text) => {
    // Extract health rating
    let verdict = 'unknown';
    if (text.includes('✅') || /healthy|good|safe|excellent/i.test(text)) verdict = 'healthy';
    else if (text.includes('❌') || /unhealthy|avoid|dangerous|harmful/i.test(text)) verdict = 'unhealthy';
    else if (text.includes('⚠️') || /caution|moderate|limit/i.test(text)) verdict = 'caution';

    return {
      verdict,
      summary: text.split('\n')[0] || text.substring(0, 150),
    };
  };

  const handleFollowUp = async (e) => {
    e.preventDefault();
    if (!followUpQuestion.trim() || isAnalyzing) return;

    const question = followUpQuestion.trim();
    setFollowUpQuestion('');
    setIsAnalyzing(true);

    setChatHistory(prev => [...prev, { role: 'user', content: question }]);

    try {
      const chatResponse = await axios.post(`${API_BASE_URL}/chat`, {
        message: question,
        conversationId: conversationId,
      });

      setChatHistory(prev => [...prev, { role: 'assistant', content: chatResponse.data.response }]);
    } catch (error) {
      console.error("Error sending follow-up:", error);
      setChatHistory(prev => [...prev, { role: 'assistant', content: '❌ Error processing question. Please try again.' }]);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetScan = () => {
    setResult(null);
    setPreviewImage(null);
    setConversationId(null);
    setChatHistory([]);
    setFollowUpQuestion('');
  };

  const getVerdictIcon = (verdict) => {
    switch(verdict) {
      case 'healthy': return '✅';
      case 'unhealthy': return '❌';
      case 'caution': return '⚠️';
      default: return '🔍';
    }
  };

  const getVerdictClass = (verdict) => {
    switch(verdict) {
      case 'healthy': return 'verdict-healthy';
      case 'unhealthy': return 'verdict-unhealthy';
      case 'caution': return 'verdict-caution';
      default: return 'verdict-unknown';
    }
  };

  return (
    <div className="scan-page">
      <div className="scan-header">
        <div className="header-icon-wrapper">
          <span className="header-icon">📷</span>
        </div>
        <div className="header-text">
          <h2 className="page-title">Ingredient Scanner</h2>
          <p className="page-subtitle">Scan product labels for instant health analysis</p>
        </div>
      </div>

      <div className="scan-container">
        {!previewImage ? (
          <div className="upload-zone" onClick={() => fileInputRef.current?.click()}>
            <div className="upload-icon-animated">📸</div>
            <h3>Click to Upload Image</h3>
            <p className="upload-subtext">Scan ingredient list from product packaging</p>
            <div className="upload-formats">
              <span className="format-badge">JPG</span>
              <span className="format-badge">PNG</span>
              <span className="format-badge">max 10MB</span>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileUpload}
              disabled={isAnalyzing}
            />
          </div>
        ) : (
          <div className="scan-result-panel">
            {/* Image Preview */}
            <div className="preview-section">
              <div className="image-wrapper">
                <img src={previewImage} alt="Scanned product" className="preview-image" />
              </div>
              <button className="reset-btn" onClick={resetScan}>
                <span className="btn-icon">🔄</span>
                <span>Scan Another</span>
              </button>
            </div>

            {/* Upload Progress */}
            {uploadProgress > 0 && uploadProgress < 100 && (
              <div className="progress-panel">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <span className="progress-text">Uploading... {Math.round(uploadProgress)}%</span>
              </div>
            )}

            {/* Analyzing State */}
            {isAnalyzing && !result && (
              <div className="analyzing-panel">
                <div className="spinner"></div>
                <h3>Analyzing Ingredients...</h3>
                <p>AI is reading and analyzing the product label</p>
              </div>
            )}

            {/* Results - Structured Cards */}
            {result && !result.error && (
              <div className="analysis-results">
                {/* Quick Verdict Card */}
                <div className={`verdict-card ${getVerdictClass(result.parsed?.verdict)}`}>
                  <div className="verdict-icon">{getVerdictIcon(result.parsed?.verdict)}</div>
                  <div className="verdict-content">
                    <h3 className="verdict-title">
                      {result.parsed?.verdict === 'healthy' && 'Generally Healthy'}
                      {result.parsed?.verdict === 'unhealthy' && 'Not Recommended'}
                      {result.parsed?.verdict === 'caution' && 'Consume with Caution'}
                      {!result.parsed?.verdict && 'Analysis Complete'}
                    </h3>
                    <p className="verdict-subtitle">
                      {result.parsed?.verdict === 'healthy' && 'This product has acceptable ingredients'}
                      {result.parsed?.verdict === 'unhealthy' && 'Contains concerning ingredients'}
                      {result.parsed?.verdict === 'caution' && 'Some ingredients to watch out for'}
                    </p>
                  </div>
                </div>

                {/* Ingredients Card */}
                <div className="result-card">
                  <div className="card-header">
                    <span className="card-icon">🔍</span>
                    <h3>Detected Ingredients</h3>
                  </div>
                  <div className="card-content">
                    <div className="ingredients-box">
                      {result.ingredients}
                    </div>
                  </div>
                </div>

                {/* Analysis Card */}
                <div className="result-card">
                  <div className="card-header">
                    <span className="card-icon">🤖</span>
                    <h3>Detailed Analysis</h3>
                  </div>
                  <div className="card-content">
                    <div className="analysis-text">
                      {result.analysis.split("\n").map((line, i) => (
                        <p key={i}>{line || '\u00A0'}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Chat History */}
                {chatHistory.length > 2 && (
                  <div className="chat-history-card">
                    <div className="card-header">
                      <span className="card-icon">💬</span>
                      <h3>Conversation</h3>
                    </div>
                    <div className="chat-messages">
                      {chatHistory.slice(2).map((msg, idx) => (
                        <div key={idx} className={`chat-message ${msg.role}`}>
                          <div className="message-content">
                            {msg.content.split('\n').map((line, i) => (
                              <p key={i}>{line || '\u00A0'}</p>
                            ))}
                          </div>
                        </div>
                      ))}
                      {isAnalyzing && (
                        <div className="chat-message assistant">
                          <div className="typing-indicator">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Follow-up Question Input */}
                <div className="followup-section">
                  <form onSubmit={handleFollowUp} className="followup-form">
                    <input
                      type="text"
                      placeholder="Ask a follow-up question about this product..."
                      value={followUpQuestion}
                      onChange={(e) => setFollowUpQuestion(e.target.value)}
                      disabled={isAnalyzing}
                      className="followup-input"
                    />
                    <button 
                      type="submit" 
                      disabled={isAnalyzing || !followUpQuestion.trim()}
                      className="followup-btn"
                    >
                      {isAnalyzing ? '...' : '➤'}
                    </button>
                  </form>
                  <div className="suggestion-chips">
                    <button 
                      className="chip"
                      onClick={() => setFollowUpQuestion("What are the main health concerns?")}
                      disabled={isAnalyzing}
                    >
                      Main concerns?
                    </button>
                    <button 
                      className="chip"
                      onClick={() => setFollowUpQuestion("Are there better alternatives?")}
                      disabled={isAnalyzing}
                    >
                      Alternatives?
                    </button>
                    <button 
                      className="chip"
                      onClick={() => setFollowUpQuestion("Is this safe for daily consumption?")}
                      disabled={isAnalyzing}
                    >
                      Daily use?
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Error State */}
            {result?.error && (
              <div className="error-panel">
                <div className="error-icon">⚠️</div>
                <h3>Error</h3>
                <p>{result.error}</p>
                <button className="retry-btn" onClick={resetScan}>
                  Try Again
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ScanPage;
