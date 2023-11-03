/** @format */
import {useEffect} from "react";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import "../assets/css/landing.css";
import {
  boxVariant1,
  boxVariant2,
  boxVariant3,
  boxVariant4,
} from "../utils/animation";

const Fdata = [
  {
    icon: "airplane",
    head: "Air Freight",
    text: "The express mode to Transport and Freight for Timely Bound Cargo shipment. Air Freight",
  },
  {
    icon: "ferry",
    head: "Sea Freight",
    text: "The Highly Cost Effective mode of Transport in Freight Forwarding for Large, Heavy and Standard Cargo Shipments",
  },
  {
    icon: "truck",
    head: "Warehouse",
    text: "We provide pro-active solution for managing your logistics and providing Warehousing services, storage and distribution for your Cargo",
  },
  {
    icon: "comment-check",
    head: "Customer clearance",
    text: "We ensure to prioritize Logistics and clearance of every cargo shipment as per the regulation of country Government and other Local Authorities",
  },
];
const One = () => {
  const [ref, inView] = useInView();
  const control = useAnimation();
  const boxVariant = [boxVariant1, boxVariant2, boxVariant3, boxVariant4];
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div className={`row one_container sectionPaddingX_sm`}>
      {Fdata.map((data) => (
        <div ref={ref} className="col-12 col-sm-6 col-md-4 col-lg-3" key={data.icon}>
          <motion.div
            variants={boxVariant[data]}
            initial="hidden"
            animate={control}
            className="one_content shadow p-4"
          >
            <div className="span d-flex justify-content-center align-items-center mb-3">
              <i className={`mdi mdi-${data.icon} `}></i>
            </div>
            <h3>{data.head}</h3>
            <p>
             {data.text}
            </p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default One;
