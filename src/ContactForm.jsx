import { useState } from "react";
import ListContact from "./ListContact";
import inputs from "./constants/inputs";

let id = 1;
export default function ContactForm() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    id: id,
  });

  const deleteHandeler = (id) => {
    const newContacts = data.filter(contact => contact.id != id);
    setData(newContacts)
  };

  const formHandeler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  };
  const formSubmit = () => {
    console.log(form);
    if (
      form.first_name != "" &&
      form.last_name != "" &&
      form.email != "" &&
      form.phone != ""
    ) {
      setData([...data, form]);
      id++;
      setForm({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        id: id,
      });
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <>
      <section className="shadow-md border border-gray-100 shadow-gray-300 px-12 py-8 rounded-xl">
        <section className="grid grid-cols-2 justify-center items-center gap-5">
          {inputs.map((input, id) => (
            <input
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              id={input.name}
              className="p-1 border border-gray-400 rounded-lg shadow shadow-gray-400 focus:border-blue-600 text-blue-600 placeholder:text-gray-500 pl-2"
              value={form[input.name]}
              onChange={formHandeler}
              key={id}
            />
          ))}

          <div className="col-span-2">
            <button
              className="w-full bg-blue-500 text-white text-sm py-2 rounded-md cursor-pointer shadow shadow-blue-300 transition-colors duration-200 hover:text-blue-800"
              onClick={formSubmit}
            >
              Add Contact
            </button>
          </div>
        </section>
      </section>

      {error ? (
        <section className="pl-8 my-6 py-3 bg-rose-100 rounded-lg">
          <p className="text-rose-500">
            There is an error | all of the fields are required
          </p>
        </section>
      ) : (
        <section className="pl-8 my-6 py-3 ">
          <p className="text-white">There</p>
        </section>
      )}

      {data.length > 0 && (
        <>
          <section className="mt-14 mb-6">
            <h2 className="text-blue-600 text-xl pl-3">Contact Lists</h2>
          </section>
          <section className="shadow shadow-gray-300 px-12 py-8 rounded-xl">
            {data.map((contact, id) => (
              <ListContact contact={contact} key={id} deleteHandeler={deleteHandeler} />
            ))}
          </section>
        </>
      )}
    </>
  );
}
