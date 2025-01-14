import './style.css'
function Navbar() {
    return (
        <>
            <div className="navbar">
                <ul className="menu">
                    <li className="menu-item"><a href="/trang_chu">Trang chủ</a></li>
                    <li className="menu-item"><a href="/san_pham">Sản phẩm</a></li>
                    <li className="menu-item"><a href="/lien_he">Liên hệ</a></li>
                    <li className="menu-item"><a href="/gio_hang">Giỏ hàng</a></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;