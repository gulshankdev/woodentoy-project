import "./SearchModal.css";
import { FiSearch, FiX } from "react-icons/fi";

function SearchModal({ isOpen, onClose }) {

    if (!isOpen) return null;

    return (

        <div className="search-overlay">

            <div className="search-modal">

                <button
                    className="close-search"
                    onClick={onClose}
                >
                    <FiX />
                </button>

                <h2>Search Products</h2>

                <div className="search-input-box">

                    <FiSearch />

                    <input
                        type="text"
                        placeholder="Search toys..."
                    />

                </div>

            </div>

        </div>

    );

}

export default SearchModal;