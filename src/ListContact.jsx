

export default function ListContact({contact , deleteHandeler}) {
    



  return (
    <section className="bg-gray-200 rounded-lg mb-3">
                <section className="grid grid-cols-10 gap-2 px-3 py-2 justify-center items-center">
                  <div className="col-span-3 text-sm text-gary-600">
                    <p>
                      {contact.first_name} {contact.last_name}
                    </p>
                  </div>
                  <div className="col-span-3 text-sm text-gary-600">
                    <p className="flex justify-start items-center">
                      <span className="flex justify-center items-center bg-white w-8 h-8 rounded-full cursor-pointer transition-colors duration-150 hover:bg-gray-100">📭</span>{" "}
                      {contact.email}
                    </p>
                  </div>
                  <div className="col-span-3 text-sm text-gary-600">
                    <p className="flex justify-start items-center">
                      <span className="flex justify-center items-center bg-white w-8 h-8 rounded-full cursor-pointer transition-colors duration-150 hover:bg-gray-100">📞</span>{" "}
                      {contact.phone}
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <span className="flex justify-center items-center bg-white w-8 h-8 rounded-full cursor-pointer transition-colors duration-150 hover:bg-gray-100" onClick={() => (deleteHandeler(contact.id))}>
                      🗑
                    </span>
                  </div>
                </section>
              </section>
  )
}
