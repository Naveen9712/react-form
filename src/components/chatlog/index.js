// src/components/ChatLog.js
import React from 'react';
import './chatlog.css'; // Import your custom CSS

const ChatLog = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row-fluid d-flex p-4">
              <div className="col-4 border bg-light">
                <div className="d-flex flex-row p-3 border-bottom">
                  <div className="input-group searchbar-sidebar">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search chat..."
                      aria-label="Search"
                    />
                    <button type="submit" className="search-btn">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </div>
                </div>
                <div className="left-side-bar">
                  <div className="left-side-bar-profile">
                    <div style={{ position: 'relative' }}>
                      <div className="online-dot"></div>
                      <img
                        src="https://w7.pngwing.com/pngs/490/157/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png"
                        alt="profile"
                        width="50"
                        height="50"
                      />
                    </div>
                    <div>
                      <h1 className="fs-6">Micheal Heart</h1>
                      <p>this is content of....</p>
                    </div>
                    <div>
                      <h1 className="fs-6">09:54 AM</h1>
                    </div>
                  </div>

                  <div className="left-side-bar-profile">
                    <div style={{ position: 'relative' }}>
                      <div className="offline-dot"></div>
                      <img
                        src="https://w7.pngwing.com/pngs/490/157/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png"
                        alt="profile"
                        width="50"
                        height="50"
                      />
                    </div>
                    <div>
                      <h1 className="fs-6">John Doe</h1>
                      <p>this is content of....</p>
                    </div>
                    <div>
                      <h1 className="fs-6">09:54 AM</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-8 border bg-light" style={{ height: '100%' }}>
                <div className="profile-header d-flex flex-row justify-content-start align-items-center border-bottom">
                  <img
                    src="https://w7.pngwing.com/pngs/490/157/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png"
                    alt="profile"
                    width="45"
                    height="45"
                    className="me-3 rounded-circle"
                  />
                  <div>
                    <h1 className="fs-6">Micheal Heart</h1>
                  </div>
                </div>
                <div className="d-flex flex-column chat-box-section">
                  <div className="text-center date-background mt-2">
                    <span>April 12, 2024</span>
                  </div>
                  <div className="sent-container">
                    <div className="d-flex flex-row justify-content-end">
                      <div className="chat-text-sent m-4">
                        <span>Hi, how are you doing?</span>
                        <div className="chat-time-container">
                          <div>
                            <span className="chat-username-received">Micheal Heart</span>
                          </div>
                          <div>
                            <span className="chat-time">9:00 PM </span>
                            <i className="fa-solid fa-check-double" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                      <div className="img-sent-container">
                        <img
                          src="https://w7.pngwing.com/pngs/490/157/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png"
                          alt="profile"
                          width="30"
                          height="30"
                          className="img-sent"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="received-container">
                    <div className="d-flex flex-row">
                      <div>
                        <img
                          src="https://w7.pngwing.com/pngs/490/157/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png"
                          alt="profile"
                          width="30"
                          height="30"
                        />
                      </div>
                      <div className="chat-text-received">
                        <span>Good morning! Hows your day going?</span>
                        <div className="chat-time-container">
                          <div>
                            <span className="chat-username-received">Micheal Heart</span>
                          </div>
                          <div>
                            <span className="chat-time">9:00 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sent-container">
                    <div className="d-flex flex-row justify-content-end">
                      <div className="chat-text-sent m-4">
                        <span>Hey, what's up?</span>
                        <div className="chat-time-container">
                          <div>
                            <span className="chat-username-received">Micheal Heart</span>
                          </div>
                          <div>
                            <span className="chat-time">9:00 PM </span>
                            <i className="fa-solid fa-check-double" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                      <div className="img-sent-container">
                        <img
                          src="https://w7.pngwing.com/pngs/490/157/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png"
                          alt="profile"
                          width="30"
                          height="30"
                          className="img-sent"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="received-container">
                    <div className="d-flex flex-row">
                      <div>
                        <img
                          src="https://w7.pngwing.com/pngs/490/157/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png"
                          alt="profile"
                          width="30"
                          height="30"
                        />
                      </div>
                      <div className="chat-text-received">
                        <span>Hello! Nice to see you.</span>
                        <div className="chat-time-container">
                          <div>
                            <span className="chat-username-received">Micheal Heart</span>
                          </div>
                          <div>
                            <span className="chat-time">9:00 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sent-container">
                    <div className="d-flex flex-row justify-content-end">
                      <div className="chat-text-sent m-4">
                        <span>So, what do you do for a living?</span>
                        <div className="chat-time-container">
                          <div>
                            <span className="chat-username-received">Micheal Heart</span>
                          </div>
                          <div>
                            <span className="chat-time">9:00 PM </span>
                            <i className="fa-solid fa-check-double" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                      <div className="img-sent-container">
                        <img
                          src="https://w7.pngwing.com/pngs/490/157/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png"
                          alt="profile"
                          width="30"
                          height="30"
                          className="img-sent"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Repeat similar sections for other chat messages */}
                </div>
                <div className="message-input border-top">
                  <div className="attachment-icon">
                    <i className="fas fa-paperclip"></i>
                  </div>
                  <input type="text" className="form-control" placeholder="Type your message..." />
                  <button className="btn btn-primary">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLog;
