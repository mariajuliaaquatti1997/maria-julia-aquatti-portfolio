import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Arrow from "./Arrow";
import { useLanguage } from "../i18n";
import { publicImage } from "../assets";

const projects = [
  {
    title: "Free Finder", category: "UI/UX Design", type: "Mobile App", year: "2024", imageClass: "project-freefinder", image: publicImage("free-finder-cover-01.webp.png"),
    description: "Uma experiência mobile pensada para conectar pessoas a lugares e experiências que combinam com elas.",
    case: { challenge: "Transformar a busca por lugares em uma descoberta local simples e inspiradora.", role: "Pesquisa, fluxos, wireframes e interface visual.", approach: "Mapeamento de jornadas, organização de categorias e prototipação de telas-chave.", deliverables: ["Fluxos de navegação", "Wireframes", "Protótipo de alta fidelidade"] },
  },
  {
    title: "CELY", category: "Visual Identity", type: "Branding", year: "2024", imageClass: "project-cely", image: publicImage("cely-site-cover.webp"),
    description: "Identidade visual construída para equilibrar sofisticação, delicadeza e reconhecimento de marca.",
    case: { challenge: "Criar uma presença digital coerente para uma marca voltada à comunidade de criadores.", role: "Direção de arte e design de interfaces.", approach: "Sistema visual escalável, composição editorial e aplicação em landing pages.", deliverables: ["Direção de arte", "Componentes visuais", "Layouts responsivos"] },
  },
  {
    title: "JJS Canada", category: "Web Design", type: "Website", year: "2023", imageClass: "project-jjs", image: publicImage("jjs-canada-cover.webp.webp"),
    description: "Website institucional com foco em clareza, posicionamento e experiência digital.", caseUrl: "https://www.behance.net/gallery/220237715/Website-JJS-Canada",
    case: { challenge: "Organizar uma oferta ampla de produtos em uma experiência institucional clara.", role: "UI design, arquitetura de informação e direção visual.", approach: "Hierarquia de conteúdo, navegação orientada por categoria e layouts adaptáveis.", deliverables: ["Arquitetura de informação", "Design responsivo", "Biblioteca de componentes"] },
  },
  {
    title: "Editorial", category: "Art Direction", type: "Print / Digital", year: "2023", imageClass: "project-editorial", image: publicImage("editorial-cover.webp.jpg"),
    description: "Direção visual e composição editorial explorando ritmo, tipografia e narrativa.",
    case: { challenge: "Criar uma narrativa visual memorável para conteúdo editorial.", role: "Conceito, direção de arte e composição.", approach: "Exploração de tipografia, grids e ritmo visual em diferentes pontos de contato.", deliverables: ["Conceito visual", "Sistema editorial", "Peças digitais"] },
  },
];
const filters = ["All", "UI/UX", "Art Direction", "Branding", "Web"];

function matchesFilter(project, filter) {
  return filter === "All" || (filter === "UI/UX" && project.category === "UI/UX Design") || (filter === "Art Direction" && project.category === "Art Direction") || (filter === "Branding" && project.category === "Visual Identity") || (filter === "Web" && project.category === "Web Design");
}

export default function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const visibleProjects = projects.filter((project) => matchesFilter(project, filter));

  return <section id="work" className="work section">
    <div className="section-heading"><div><p className="eyebrow">{t.projects}</p><h2>{t.featured}</h2></div><div className="filters">{filters.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div></div>
    <motion.div layout className="project-grid"><AnimatePresence mode="popLayout">{visibleProjects.map((project) => <motion.article key={project.title} className={`project-card ${project.imageClass}`} layout whileHover={{ y: -8 }} transition={{ duration: 0.35 }} onClick={() => setSelectedProject(project)}><div className="project-glow" /><div className="project-topline"><span>{project.type}</span><span>{project.year}</span></div><div className="project-visual"><img className="project-image" src={project.image} alt={`Projeto ${project.title}`} /></div><div className="project-info"><div><p>{project.category}</p><h3>{project.title}</h3></div><Arrow /></div></motion.article>)}</AnimatePresence></motion.div>
    <p className="projects-hint">Clique em um projeto para ver o processo.</p>
    <AnimatePresence>{selectedProject && <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} role="dialog" aria-modal="true" aria-label={`Case ${selectedProject.title}`}><motion.div className="modal-content" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Fechar case">×</button><p className="eyebrow">{selectedProject.category} · {selectedProject.year}</p><h2>{selectedProject.title}<span>.</span></h2><p>{selectedProject.description}</p><img className="modal-art" src={selectedProject.image} alt={`Detalhe do projeto ${selectedProject.title}`} /><div className="case-details"><div><small>DESAFIO</small><p>{selectedProject.case.challenge}</p></div><div><small>MEU PAPEL</small><p>{selectedProject.case.role}</p></div><div><small>ABORDAGEM</small><p>{selectedProject.case.approach}</p></div><div><small>ENTREGAS</small><ul>{selectedProject.case.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div></div>{selectedProject.caseUrl && <a className="text-link" href={selectedProject.caseUrl} target="_blank" rel="noreferrer">{t.openCase} <Arrow /></a>}</motion.div></motion.div>}</AnimatePresence>
  </section>;
}
