import React, {useState} from 'react';
import {HiMenuAlt4, HiX} from "react-icons/hi";
import { motion } from 'framer-motion/dist/framer-motion'

const SideBarPhone = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <HiMenuAlt4 onClick={() => setToggle(true)} className="visible flex justify-center xl:invisible flex justify-center align-center" />

            {toggle && (
                <motion.div
                    whileInView={{ x: [-300, 0] }}
                    transition={{ duration: 0.85, ease: 'easeOut' }}
                >
                    <HiX onClick={() => setToggle(false)} />
                </motion.div>
            )}
        </div>
    );
};

export default SideBarPhone;
