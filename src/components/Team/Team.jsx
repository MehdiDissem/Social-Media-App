import React from "react";
import "./Team.css";

const Team = () => {
  return (
    <div class="bck">
      <div className="conts" class="conts mx-auto mt-5 col-md-10 mt-100">
        <div class="header1">
          <div class="title1">Our Expert Team</div>
          <p>
            <small class="text-muted">SocialSports Project</small>
          </p>
        </div>
        <div class="row justify-content-center pb-5">
          <div class="cardzz col-md-3 mt-100">
            <div class="cardzz-content">
              <div class="cardzz-body p-0">
                <div class="profilzz">
                  {" "}
                  <img src="https://ca.slack-edge.com/T03T17WCLPP-U03TK7DJYSH-82b4479703fc-72" />{" "}
                </div>
                <div class="cardzz-title mt-4">
                  {" "}
                  Ahmed Mejdoub
                  <br /> <small>Backend specialist.</small>{" "}
                </div>
                <div class="cardzz-subtitle">
                  <p>
                    {" "}
                    <small class="text-muted">
                      {" "}
                      I expected anything less than perfect for the team of
                      experts. They are the best team ever!{" "}
                    </small>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="cardzz col-md-3 mt-100">
            <div class="cardzz-content">
              <div class="cardzz-body p-0">
                <div class="profilzz">
                  {" "}
                  <img src="https://ca.slack-edge.com/T03T17WCLPP-U040AB681K4-b7ab5e7fbd9d-72" />{" "}
                </div>
                <div class="cardzz-title mt-4">
                  {" "}
                  Fedy Guizeni
                  <br /> <small>Frontend specialist</small>{" "}
                </div>
                <div class="cardzz-subtitle">
                  <p>
                    {" "}
                    <small class="text-muted">
                      {" "}
                      I really enjoyed working with them, they are Group of
                      Professionals and they know what they're Doing{" "}
                    </small>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="cardzz col-md-3 mt-100">
            <div class="cardzz-content">
              <div class="cardzz-body p-0">
                <div class="profilzz">
                  {" "}
                  <img src="https://scontent.ftun9-1.fna.fbcdn.net/v/t1.6435-9/51503055_2148239181905982_8487393068146753536_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=gqC3QabwAq4AX9NwjIg&_nc_ht=scontent.ftun9-1.fna&oh=00_AfD-nZGdX9FhgVBiEDPAFRYtfABD5toWxkW6RRaFMWCJZg&oe=63BB4301" />{" "}
                </div>
                <div class="cardzz-title mt-4">
                  {" "}
                  Mehdi Dissem
                  <br /> <small>Scrum Master</small>{" "}
                </div>
                <div class="cardzz-subtitle">
                  <p>
                    {" "}
                    <small class="text-muted">
                      {" "}
                      Amazing teamwork, communication and goals. I'm blessed to
                      have this team.{" "}
                    </small>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
