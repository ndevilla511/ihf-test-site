import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/ihf-test-site">Home</Link>
                    </li>
                    <li>
                        <Link to="/ihf-test-site/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/ihf-test-site/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/ihf-test-site/property-search">Property Search</Link>
                    </li>
                    <li>
                        <Link to="/ihf-test-site/featured-listings">Featured Listings</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;