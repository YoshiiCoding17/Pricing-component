import { useEffect, useState } from "react"


export const App = () => {
  const obj ={
    1: [8,"10k"],
    2: [12,"50k"],
    3: [16,"100k"],
    4: [24,"500k"],
    5: [36,"1M"]
  }

  const [valor, setValor] = useState(3)
  const [price, setPrice] = useState(16.00.toFixed(2))
  const [billing, setBilling] = useState("month")
  const [viewers, setViewers] = useState(obj[valor][1])

  useEffect(() => {
    setPrice(billing == "month" ? obj[valor][0].toFixed(2) : (obj[valor][0] * 12 * 0.75).toFixed(2));
    setViewers(obj[valor][1])
  }, [billing,valor])
  const handleChange = ({target:{value}}) =>{
    setValor(value);
  }
  const handleCheckbox = ({target}) =>{
    setBilling(target.checked ? "year" : "month")
  }
  return (
    <div className="card container">
      <header className="card__header">
        <h1 className="card__title">Simple, traffic-based pricing</h1>
        <p className="card__p">Sign-up for our 30-days trial.<span className="card__p-span">No credit card required</span></p>
      </header>
      <main className="pricing">
        <h2 className="pricing__views">{viewers} PageViews</h2>
        <input className="pricing__range" type="range" onChange={handleChange} min="1" max="5" step="1" defaultValue={valor}/>
        <p className="pricing__data"><span className="pricing__price">${price}</span> / {billing}</p>
        <div className="pricing__switch">
          <p className="pricing__type">Monthly Billing</p>
          <label className="pricing__checkbox">
            <input className="pricing__checkbox-input" type="checkbox" value={valor} onChange={handleCheckbox}/>
            <span className="pricing__slider"></span>
          </label>
          <p className="pricing__type">Yearly Billing</p>
        </div>
    </main>
    <footer className="card__footer">
      <div className="card__footer-1">
        <p className="card__p card__p--features">Unlimited websites</p>
        <p className="card__p card__p--features">100% data ownership</p>
        <p className="card__p card__p--features">Email reports</p>
      </div>
      <button className="card__button">Start my trial</button>
    </footer>
    </div>
  )
}
