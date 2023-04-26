import { Link } from "react-router-dom";

import './errorPage.scss';

const ErorrPage: React.FC = () => {
    return (
        <div className="container">
			<h1 className='title'>Oops,page is not found!</h1>
			<Link to='/' className="link">Back to Main page</Link>
		</div>
    )
}

export default ErorrPage;