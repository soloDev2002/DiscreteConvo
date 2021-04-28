import React, { useState } from "react";
import Switch from "react-switch";
import "../css/form.css";
import Button from "@material-ui/core/Button";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import RemoveIcon from "@material-ui/icons/Remove";
import ClearIcon from "@material-ui/icons/Clear";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
function Form() {
  const [allowWidgetResize, setAllowWidgetResize] = useState(false);
  const [showMaximumButton, setShowMaximumButton] = useState(false);
  const [showMinimumButton, setShowMinimumButton] = useState(false);
  const [showPopoutButton, setShowPopoutButton] = useState(false);
  const [showMaxButton, setShowMaxButton] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  return (
    <div className="form__container">
      <div className="form__child__container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="field">
            <label>Select Organisation</label>
            <select list="organisations">
              <option value="select" selected disabled hidden>
                Select Here
              </option>
              <option value="Discrete Conversation">
                Discrete Conversation
              </option>
            </select>
          </div>
          <div className="field">
            <label>Widget Style</label>
            <select list="styles">
              <option value="select" selected disabled hidden>
                Select Here
              </option>
              <option value="simple">Simple</option>
              <option value="complex">Complex</option>
            </select>
          </div>
          <div
            className="msgONandOFF"
            onClick={() => {
              setShowMsg(!showMsg);
            }}
          >
            {showMsg ? (
              <ClearIcon color="secondary" />
            ) : (
              <EmailRoundedIcon color="secondary" />
            )}
          </div>
          <div className="split">
            <div className={`left__container  ${showMsg && "hideForm"}`}>
              <div className="widget__control">
                <h3>Widget Control</h3>
                <div className="widget__switches">
                  <label>Allow Widget Resize?</label>
                  <div className="switch">
                    <label>Yes</label>
                    <div className="switch__icon">
                      <Switch
                        height={25}
                        width={50}
                        checked={allowWidgetResize}
                        onColor="#EC1E29"
                        uncheckedIcon={false}
                        checkedIcon={false}
                        onChange={() =>
                          setAllowWidgetResize(!allowWidgetResize)
                        }
                      />
                    </div>
                    <label>No</label>
                  </div>
                </div>
                <div className="widget__switches">
                  <label>Show Maximum Button?</label>
                  <div className="switch">
                    <label>Yes</label>
                    <div className="switch__icon">
                      <Switch
                        height={25}
                        width={50}
                        checked={showMaximumButton}
                        onColor="#EC1E29"
                        uncheckedIcon={false}
                        checkedIcon={false}
                        onChange={() =>
                          setShowMaximumButton(!showMaximumButton)
                        }
                      />
                    </div>
                    <label>No</label>
                  </div>
                </div>
                <div className="widget__switches">
                  <label>Show Minimum Button?</label>
                  <div className="switch">
                    <label>Yes</label>
                    <div className="switch__icon">
                      <Switch
                        height={25}
                        width={50}
                        checked={showMinimumButton}
                        onColor="#EC1E29"
                        uncheckedIcon={false}
                        checkedIcon={false}
                        onChange={() =>
                          setShowMinimumButton(!showMinimumButton)
                        }
                      />
                    </div>
                    <label>No</label>
                  </div>
                </div>
                <div className="widget__switches">
                  <label>Show Popout Button?</label>
                  <div className="switch">
                    <label>Yes</label>
                    <div className="switch__icon">
                      <Switch
                        height={25}
                        width={50}
                        checked={showPopoutButton}
                        onColor="#EC1E29"
                        uncheckedIcon={false}
                        checkedIcon={false}
                        onChange={() => setShowPopoutButton(!showPopoutButton)}
                      />
                    </div>
                    <label>No</label>
                  </div>
                </div>
                <div className="widget__select">
                  <label>Widget Animation?</label>
                  <select className="widget__animation">
                    <option value="select" selected disabled hidden>
                      Select Here
                    </option>
                  </select>
                </div>
              </div>
              <div className="widget__icon__setting">
                <h3>Widget Icon Setting</h3>
                <div className="widget__select">
                  <label>Widget Icon Location?</label>
                  <select className="widget__icon__location">
                    <option value="select" selected disabled hidden>
                      Select Here
                    </option>
                  </select>
                </div>
                <div className="widget__switches">
                  <label>Show Maximum Button?</label>
                  <div className="switch">
                    <label>Yes</label>
                    <div className="switch__icon">
                      <Switch
                        height={25}
                        width={50}
                        checked={showMaxButton}
                        onColor="#EC1E29"
                        uncheckedIcon={false}
                        checkedIcon={false}
                        onChange={() => setShowMaxButton(!showMaxButton)}
                      />
                    </div>
                    <label>No</label>
                  </div>
                </div>
                <div className="widget__select">
                  <label>Select Graphic File</label>
                  <div className="graphic__file">
                    <input
                      className="enter__link"
                      type="text"
                      placeholder="Link"
                    />
                    <Button
                      className="custom__button"
                      style={{
                        backgroundColor: "rgb(177,179,178)",
                      }}
                      variant="contained"
                      component="label"
                    >
                      OR SELECT FILE <input type="file" hidden />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className={`right__container ${showMsg && "activeMsgScreen"}`}>
              <div className="message__box">
                <div className="header">
                  <div className="infos">
                    <div className="name" style={{ fontSize: "18px" }}>
                      Martin
                    </div>
                    <div className="status" style={{ fontSize: "15px" }}>
                      <span>
                        <FiberManualRecordIcon
                          style={{ color: "green", fontSize: "10px" }}
                        />
                      </span>
                      Online
                    </div>
                  </div>
                  <div className="icons">
                    <MoreHorizIcon />
                  </div>
                  <div className="icons">
                    <AccessTimeIcon />
                  </div>
                  <div className="icons">
                    <RemoveIcon />
                  </div>
                  <div className="icons">
                    <ClearIcon />
                  </div>
                </div>
                <div
                  className="body"
                  style={{
                    backgroundColor: "#f3f3f3",
                  }}
                >
                  <div className="msg__recieved">
                    <div className="name__time">Martin&nbsp;&nbsp;2:36 pm</div>
                    <div className="msg__rec">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et
                    </div>
                  </div>
                  <div className="msg__sent">
                    <div className="name__time">John&nbsp;&nbsp;2:36 pm</div>
                    <div className="msg__st">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et
                    </div>
                  </div>
                  <div className="unread">Unread</div>
                  <div className="msg__recieved">
                    <div className="name__time">Martin&nbsp;&nbsp;2:36 pm</div>
                    <div className="msg__rec">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et
                    </div>
                  </div>
                  <div className="msg__footer">
                    <TextField
                      style={{ borderWidth: "0px" }}
                      className="search__field"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MoreVertIcon />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <div className="send__Icon">
                              <SendOutlinedIcon
                                style={{
                                  color: "white",
                                  transform: "rotate(-45deg)",
                                }}
                              />
                            </div>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <Button
              className="custom__submit__buttons"
              variant="outlined"
              style={{
                borderColor: "rgb(237,30,41)",
                color: "rgb(237,30,41)",
              }}
            >
              CANCEL CHANGES
            </Button>
            <Button
              className="custom__submit__buttons"
              variant="contained"
              style={{ backgroundColor: "rgb(237,30,41)", color: "#fff" }}
            >
              SAVE AND APPLY
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
