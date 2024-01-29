import React from "react";

const Footer = () => {
    return (
      <footer className="text-white">
        <div className="bg-[#32BCBB] flex flex-col space-y-3 md:flex-row-reverse justify-between mainPadding py-5 items-center">
          <div>
            <p>جميع الحقوق محفوظة لدى إمكان 2024</p>
          </div>
          <div>
            <ul className="flex space-x-10">
              <li>
                <a href="#">قدم شكوي</a>
              </li>
              <li>
                <a href="#">الشروط والاحكام</a>
              </li>
              <li>
                <a href="#">سياسة الخصوصية</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#3A3772] text-center text-[11px] py-5">
          <p>
            شركة إمكان للتمويل رقم السجل التجاري:1010501239 رقم الترخيص:
            55/أش/202004 العنوان الوطني: ﺷﺮﻛﺔ ﺷﺨﺺ واﺣﺪ ﻣﺴﺎﻫﻤﺔ ﻣﻘﻔﻠﺔ 6285 اﻟﻄﺮﻳﻖ
            اﻟﺪاﺋﺮي اﻟﺸﺮﻗﻲ اﻟﻔﺮﻋﻲ - ﺣﻲ اﻟﺮﻳﺎن وﺣﺪة رﻗﻢ 1 اﻟﺮﻳﺎض 14213 – 3203
            اﻟﻤﻤﻠﻜﺔ اﻟﻌﺮﺑﻴﺔ اﻟﺴﻌﻮدﻳﺔ, خاضعة لرقابة وإشراف البنك المركزي السعودي
            </p>
        </div>
      </footer>
    );
};

export default Footer;
