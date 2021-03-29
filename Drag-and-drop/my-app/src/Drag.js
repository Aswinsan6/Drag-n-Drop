import React from "react";
// import Drop from "./Drop";
const Drag =({handleLogout})=>{
    return(
        <section className="hero">
            <nav>
<h2>Welcome</h2>
<button onClick={handleLogout}>Logout</button>
</nav>
<div className="kanban">
<h2>Kanban Board for our company</h2>
</div>

</section>



    );
};



export default Drag;