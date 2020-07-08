import React from "react";
import styling from "./TakeSteps.module.css";
import doctorImage from "../../../images/Take-Steps/whatiscovid.png";
import { FaCheckCircle } from "react-icons/fa";

export default function TakeSteps() {
  return (
    <div className={styling.TakeSteps} id="TakeSteps">
      <div>
        <div className={styling.imageSection}>
          <img src={doctorImage} alt="" />
        </div>
        <div className={styling.textSection}>
          <h1>Take steps to protect others</h1>
          <div>
            <div className={styling.checkIcon}>
              <FaCheckCircle />
            </div>
            <div>
              <span className={styling.boldText}>Stay home if you’re sick</span>{" "}
              – Stay home if you are sick, except to get medical care.
            </div>
          </div>
          <div>
            <div className={styling.checkIcon}>
              <FaCheckCircle />
            </div>
            <div>
              <span className={styling.boldText}>
                Cover your mouth and nose
              </span>{" "}
              – with a tissue when you cough or sneeze (throw used tissues in
              the trash) or use the inside of your elbow.
            </div>
          </div>
          <div>
            <div className={styling.checkIcon}>
              <FaCheckCircle />
            </div>
            <div>
              <span className={styling.boldText}>
                Wear a facemask if you are sick
              </span>{" "}
              – You should wear a facemask when you are around other people
              (e.g., sharing a room or vehicle) and before you enter a
              healthcare provider’s
            </div>
          </div>
          <div>
            <div className={styling.checkIcon}>
              <FaCheckCircle />
            </div>
            <div>
              <span className={styling.boldText}>
                Clean AND disinfect frequently touched surfaces daily
              </span>
              – This includes phones, tables, light switches, doorknobs,
              countertops, handles, desks, toilets, faucets, and sinks
            </div>
          </div>
          <div>
            <div className={styling.checkIcon}>
              <FaCheckCircle />
            </div>
            <div>
              <span className={styling.boldText}>Clean the dirty surfaces</span>{" "}
              – Use detergent or soap and water prior to disinfection
            </div>
          </div>
          <div>
            <div className={styling.checkIcon}>
              <FaCheckCircle />
            </div>
            <div>
              <span className={styling.boldText}>
                Stay informed about the local COVID-19 situation
              </span>{" "}
              – Get up-to-date information about local COVID-19 activity from
              public health officials.
            </div>
          </div>
          <div>
            <div className={styling.checkIcon}>
              <FaCheckCircle />
            </div>
            <div>
              <span className={styling.boldText}>
                Dedicated, lined trash can
              </span>{" "}
              – If possible, dedicate a lined trash can for the ill person. Use
              gloves when removing garbage bags, and handling & disposing of
              trash.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
