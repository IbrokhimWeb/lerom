import React from 'react';
import s from "./NewProducts.module.css";

// Import data
import { select } from "../../static/static";

// Import components
import Select from "../../components/select/Select"

function NewProducts(props) {
    return (
        <>
            <section className={s.section}>
                {
                    select.map((e, i) => <Select key={i} data={e} />)
                }
            </section>
        </>
    );
}

export default NewProducts;