import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

const PricesContainer = ({ name, fivePrice, tenPrice, singlePrice }) => {
  const [showPrices, setShowPrices] = useState(false);

  const handleShowPrices = () => {
    setShowPrices((prev) => !prev);
  };

  return (
    <div className="px-[37px] 2xl:px-0">
      <div
        className="flex items-center gap-2 justify-between bg-[#222] rounded-[147px] pr-4 pl-6 py-2 cursor-pointer"
        onClick={handleShowPrices}
      >
        <p className="text-[#C4C4C4] font-Nunito text-sm font-bold leading-normal uppercase">
          {name}
        </p>
        <motion.img
          src="/service-arrow.svg"
          alt="arrow"
          className="transition-transform"
          animate={{ rotate: showPrices ? 49 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <AnimatePresence>
        {showPrices && (
          <motion.div
            className="border border-[#D7FD44] rounded-[60px] mt-4 overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul
              className="px-7 py-3 flex items-start justify-between flex-col sm:flex-row sm:items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <li className="flex items-center gap-3 text-white font-Nunito text-sm">
                <RxCross2 className="text-[#D7FD44] font-bold text-[30px]" />
                <p>5 SESSIONS: ${fivePrice}</p>
              </li>
              <li className="flex items-center gap-3 text-white font-Nunito text-sm">
                <RxCross2 className="text-[#D7FD44] font-bold text-[30px]" />
                <p>10 SESSIONS: ${tenPrice}</p>
              </li>
              <li className="flex items-center gap-3 text-white font-Nunito text-sm">
                <RxCross2 className="text-[#D7FD44] font-bold text-[30px]" />
                <p>SINGLE SESSIONS: ${singlePrice}</p>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PricesContainer;
