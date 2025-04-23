import { departments } from '../data/departments';

const Departments = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Departments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{dept.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{dept.name}</h3>
              <p className="text-gray-600">{dept.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
