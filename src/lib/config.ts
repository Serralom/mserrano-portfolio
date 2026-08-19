// Datos centralizados de la web. Edita aquí nombre, enlaces y textos clave.

export const site = {
  name: "Miguel Serrano Alonso",
  role: "Ingeniero de Datos Freelance",
  tagline: "Diseño y construyo pipelines de datos fiables, del origen al dato listo para decidir.",
  location: "España · trabajo en remoto",
  email: "miguelserranoalonso@gmail.com", // TODO: sustituir por email profesional cuando lo tengas
  links: {
    // TODO: sustituir por las URLs reales de cada perfil
    linkedin: "https://www.linkedin.com/in/TU-USUARIO",
    malt: "https://www.malt.es/profile/TU-USUARIO",
    github: "https://github.com/TU-USUARIO",
  },
};

export const about = {
  paragraphs: [
    "Antes de dar el salto al trabajo autónomo, trabajé como Ingeniero de Datos en empresa, diseñando y manteniendo pipelines, modelos de datos e infraestructura para que los equipos pudieran tomar decisiones con datos fiables.", // TODO: ajustar con sector/años concretos si quieres mencionarlos
    "Ahora doy el paso a trabajar como freelance a través de Malt. Sigo aplicando el mismo criterio técnico: pipelines robustos, código mantenible y datos en los que se pueda confiar, pero con la cercanía y flexibilidad de trabajar directamente contigo.",
    "Este es mi primer proyecto como autónomo — lo que significa dedicación total a que salga bien, sin la carga de una cartera de clientes que reparta mi atención.",
  ],
};

export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Pipelines de datos (ETL / ELT)",
    description:
      "Extracción, transformación y carga de datos desde tus fuentes (APIs, bases de datos, ficheros) a un destino fiable y consultable.",
  },
  {
    title: "Arquitectura de datos en la nube",
    description:
      "Diseño de infraestructura de datos en AWS, GCP o Azure: almacenamiento, cómputo y seguridad pensados para escalar sin sorpresas.",
  },
  {
    title: "Modelado y data warehousing",
    description:
      "Modelado dimensional y organización de tu almacén de datos para que las consultas y los informes sean rápidos y consistentes.",
  },
  {
    title: "Orquestación y automatización",
    description:
      "Flujos de trabajo automatizados y programados con Airflow o similares, con monitorización y alertas cuando algo falla.",
  },
  {
    title: "Calidad y buenas prácticas",
    description:
      "Tests de calidad de datos, control de versiones y documentación para que el sistema sea mantenible por cualquiera, no solo por mí.",
  },
  {
    title: "Consultoría y auditoría",
    description:
      "Revisión de tu infraestructura de datos actual: qué funciona, qué no, y un plan de acción priorizado para mejorarla.",
  },
];

export type TechCategory = {
  category: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  {
    category: "Lenguajes y procesamiento",
    items: ["Python", "SQL", "PySpark", "Pandas"],
  },
  {
    category: "Cloud",
    items: ["AWS", "Google Cloud", "Azure"],
  },
  {
    category: "Orquestación y modelado",
    items: ["Airflow", "dbt", "Snowflake", "BigQuery", "Redshift"],
  },
  {
    category: "Herramientas",
    items: ["Docker", "Git", "CI/CD"],
  },
];

export type ProcessStep = {
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    title: "Llamada inicial",
    description: "Hablamos de tu problema de datos, tus objetivos y tus sistemas actuales. Sin coste ni compromiso.",
  },
  {
    title: "Propuesta y alcance",
    description: "Te envío una propuesta clara: qué voy a construir, en qué plazos y a qué precio.",
  },
  {
    title: "Desarrollo iterativo",
    description: "Trabajo en entregas visibles y frecuentes, con comunicación constante sobre el avance.",
  },
  {
    title: "Entrega y documentación",
    description: "Recibes el sistema funcionando, documentado y explicado, sin cajas negras.",
  },
  {
    title: "Soporte posterior",
    description: "Disponible para ajustes, dudas o siguientes fases una vez entregado el proyecto.",
  },
];
