import React from "react";
import pic from "../../assets/images/slide1.jpg";

const Contact = () => {
  return (
    <>
      <div id="contact" className="mainPadding mainAfter py-10">
        <h2 className="title text-center">تواصل معنا</h2>
        <div className="py-10 flex flex-col md:flex-row items-center space-y-5">
          <div className="w-full md:w-1/2">
            <img src={pic} alt="pic" />
          </div>
          <div className="w-full md:w-1/2 text-right">
            <div>
              <p className="text-[#3a3772] text-2xl font-bold">
                تواصل معنا عبر الواتس اب أو قم بتعبئة البيانات المطلوبة وسيتم
                التواصل معك في أسرع وقت ممكن!
              </p>
              <a
                className="bg-[#7777AE] text-white font-bold py-2 px-10 rounded-lg ml-auto w-fit my-2 block"
                href="https://web.whatsapp.com/"
                target="-blank"
              >
                تواصل عبر الواتس اب
              </a>
            </div>
            <div>
              <form className="flex flex-col w-full md:w-[80%] ml-auto">
                <label className="labelText" htmlFor="name">
                  الاسم الكريم
                </label>
                <input
                  className="inputs"
                  type="text"
                  placeholder="الرجاء ادخال اسمك"
                  id="name"
                  required
                />
                <label className="labelText" htmlFor="email">
                  البريد الالكتروني
                </label>
                <input
                  required
                  className="inputs"
                  type="email"
                  placeholder="الرجاء ادخال الايميل"
                  id="email"
                />
                <label className="labelText" htmlFor="service">
                  اختر الخدمة المطلوبة
                </label>
                <select
                  className="inputs text-gray-400 text-right"
                  id="service"
                >
                  <option value="التمويل الشخصي">التمويل الشخصي</option>
                  <option value="قرض شخصي">قرض شخصي</option>
                  <option value="تمويل الشركات">تمويل الشركات</option>
                  <option value="التمويل العقاري">التمويل العقاري</option>
                  <option value="تمويل جسر">تمويل جسر</option>
                  <option value="تمويل البنك الاهلي">تمويل البنك الاهلي</option>
                  <option value="تمويل سيارات">تمويل سيارات</option>
                </select>
                <label className="labelText" htmlFor="num">
                  رقم الجوال
                </label>
                <input required className="inputs" type="num" id="num" />
                <button className="w-full bg-[#32BCBB] my-4 h-10 rounded-md text-white">
                  ارسال
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
