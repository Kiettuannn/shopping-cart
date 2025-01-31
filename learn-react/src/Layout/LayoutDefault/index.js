import {NavLink, Outlet} from 'react-router-dom'
import "./LayoutDefault.scss"
import CartMini from '../../components/CartMini';
function LayoutDefault(){
  return(
    <>
      <div className="layout">
        <header className="layout__header">
          <NavLink to="/" className="layout__logo">Logo</NavLink>
          <div className="menu">
            <ul>
              <li className="menu__cart">
                 <CartMini />
              </li>
            </ul>
          </div>
        </header>
        <main className="layout__main">
          <Outlet></Outlet>
        </main>
        <footer className="layout__footer">
          <div>Coppyright by @TuanKiet</div>
        </footer>
      </div>
    </>
  )
}
export default LayoutDefault;