import React from "react";

const ByCategory = ({ categories, setCatHandler }) => {
    return (
        <div className="mb-4">
            <h4 className="font-bold mb-4">Category:</h4>
            <select 
                className="select w-full max-w-xs bg-slate-100" defaultValue="Category"
                onChange={setCatHandler}
            >
                <option>Category</option>
                {
                    categories.map(cat => <option key={cat.value} value={cat.value}>{cat.tagContent}</option>)
                }
            </select>
        </div>
    );
}

export default ByCategory;