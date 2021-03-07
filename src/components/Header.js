import React,{ Component } from 'react';

class Header extends Component {
  render () {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            {/* <a className="navbar-brand" href="#">Logo</a> */}
            <img alt="logo" src="./logo192.png" width='3%'/>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Đặt lịch khám</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Ngoại khoa</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Da liễu</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Giới thiệu</a>
                </li>
            </ul>
                <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-primary btn__custom" type="submit">Đặt hẹn khám ngay</button>
                </form>
            </div>
        </nav>
    )
  };
}

export default Header;
