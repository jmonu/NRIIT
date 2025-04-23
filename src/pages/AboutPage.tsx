const AboutPage = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About NRIIT</h1>
        <div className="max-w-4xl mx-auto text-gray-700">
          <p className="mb-4">
            NRI Institute of Technology (NRIIT) is a leading institution committed to providing
            high-quality technical education and fostering innovation. Located in Vijayawada, Andhra
            Pradesh, NRIIT offers a range of undergraduate and postgraduate programs in engineering and
            technology.
          </p>
          <p className="mb-4">
            Our state-of-the-art campus, experienced faculty, and industry-aligned curriculum ensure
            that our students are well-prepared for global challenges. We emphasize research,
            entrepreneurship, and holistic development to create leaders who make a difference.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Our Values</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Excellence in education and research</li>
            <li>Integrity and ethical practices</li>
            <li>Inclusivity and diversity</li>
            <li>Commitment to societal impact</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
