import { Container } from "@/components/container";
import React from "react";
import { FaIndustry, FaHistory } from "react-icons/fa";
const AboutUs = () => {
  const sections = [
    {
      id: 1,
      title: "Nossa História",
      content:
        "Fundada em 2010, nossa empresa começou como uma pequena oficina familiar. Com dedicação e trabalho árduo, nos tornamos referência no setor industrial.",
      icon: <FaHistory className="mb-4 text-4xl" />,
    },
    {
      id: 2,
      title: "Nosso Ramo",
      content:
        "Atuamos no setor industrial com foco em automação e tecnologia de ponta. Nosso compromisso é fornecer soluções inovadoras para nossos clientes.",
      icon: <FaIndustry className="mb-4 text-4xl" />,
    },
  ];

  return (
    <Container className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-4 text-center text-4xl font-bold">
        Sobre Nossa Empresa
      </h1>

      <h2 className="mb-8 text-center text-xl text-gray-600">
        Conheça nossa trajetória e área de atuação
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {sections.map((section) => (
          <div key={section.id} className="rounded-lg bg-white p-6 shadow-md">
            <div className="flex flex-col items-center">
              {section.icon}
              <h2 className="mb-4 text-2xl font-semibold">{section.title}</h2>
              <p className="text-center text-gray-600">{section.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-semibold">
          Com o que Trabalhamos
        </h2>
        <p className="text-center text-gray-600">
          Especializados em soluções industriais, oferecemos serviços de
          automação, manutenção de equipamentos, consultoria técnica e
          implementação de novas tecnologias. Nossa equipe altamente qualificada
          está preparada para atender às necessidades específicas de cada
          cliente, garantindo eficiência e qualidade em todos os projetos.
        </p>
      </div>
    </Container>
  );
};

export default AboutUs;
