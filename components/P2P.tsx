import style from '@/assets/css/schedule.module.css'
import {containerType, countries} from "@/constants";


const P2P = () => {
    let i = 0;
  return (
    <form className={` w-full h-full py-5 flex flex-col justify-center items-center lg:bg-white lg:shadow-md lg:border lg:rounded-lg lg:ml-5 ${style.form}`}>
      <div className="form-group  pb-3">
        <label htmlFor="from">From (City, Country/Region)</label>
        <input type="text" className="form-control" placeholder='from Alaska' />
        <span>
          <input type="radio" name="merc" id="" className="bg-warning" />
          <p>Merchant Haulage</p>
        </span>
        <span>
          <input type="radio" name="carrier" id="" />
          <p>Carrier Haulage </p>
        </span>
      </div>

      <div className="form-group pb-3">
        <label htmlFor="from">To (City, Country/Region)</label>
        <input type="text" className="form-control" placeholder='to Adisababa'/>
        <span>
          <input type="radio" name="merc" id="" />
          <p>Merchant Haulage</p>
        </span>
        <span>
          <input type="radio" name="carrier" id="" />
          <p>Carrier Haulage </p>
        </span>
      </div>

      <div className="form-group  pb-3">
        <label htmlFor="from">Date</label>
        <select>
          <option value="Departing">Departing</option>
          <option value="Arrival By">Arrival By</option>
        </select>
        <input type="Date" className="form-control my-1" />
      </div>
      <div className="form-group  pb-3">
        <label htmlFor="from">Container type</label>
        <select
          id="containerType"
          name="containerType"
          className="form-input__field"
        >
          {containerType.map((container) => (
            <option value="" key={i++}>
              {container}
            </option>
          ))}
        </select>
        <span>
          <input type="checkbox" name="cargo-temp" id="cargo_temp" />
          <p>Cargo requires temperature control</p>
        </span>
      </div>

      <div className="form-group  pb-3">
        <label htmlFor="from">Vessel flag (optional) </label>
        <select id="vesselFlag" name="vesselFlag" className="form-input__field">
          {countries.map((country) => (
            <option value="" key={i++}>
              {country}
            </option>
          ))}
        </select>
      </div>

     
        <button className={style.btn}>search</button>
      
    </form>
  );
}

export default P2P