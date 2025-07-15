# Pipeline de CI/CD Automatizado

**Grupo 5**  
- Juan Villaman  
- Cristóbal de Jesus  
- Víctor Figueroa  

## Módulo 6: Tecnología Cloud y DevOps  
**Clase 6: Servicios Cloud de CI y CD**  
**Ejercicio Guiado:** Automatización de Despliegue con GitHub Actions y GitHub Pages  

## Descripción
Este repositorio contiene un proyecto de automatización CI/CD en GitHub, dividido en dos ramas principales: `main` y `dev`. Cada rama refleja un entorno diferente (producción y desarrollo, respectivamente), e implementa validación de código, integración continua y despliegue automático a GitHub Pages. El ejercicio se basó en adaptar y personalizar una arquitectura funcional, siguiendo las mejores prácticas DevOps con herramientas modernas como GitHub Actions.

## Objetivo
El objetivo de esta actividad fue aprender a configurar un pipeline de integración y despliegue continuo usando GitHub Actions, incluyendo validaciones automáticas de código, pruebas, auto-fusión de pull requests exitosos y publicación automática en GitHub Pages para cada rama. Se buscó consolidar el entendimiento práctico de CI/CD y adaptarlo a un flujo realista basado en ramas paralelas.

---

## Preguntas Finales

**¿Qué ventajas te ofrece la integración de un auto-merge en el pipeline de actions?**  
Ahorra tiempo al fusionar automáticamente ramas validadas, evitando pasos manuales innecesarios. Por ejemplo, al aprobar el PR desde `dev`, se integra directamente a `main` sin intervención humana, manteniendo fluidez y confianza en el proceso.

**¿Qué desafíos encontraste al integrar la automatización?**  
Uno de los retos fue configurar correctamente las reglas de protección de entornos y los secrets, especialmente para permitir despliegues desde `dev`. También fue confuso cuando las ramas no compartían historial y al gestionar varios entornos en paralelo.

**¿Cómo mejorarías esta arquitectura de pipeline para proyectos reales? ¿Tomarías como opción el auto-merge?**  
En un proyecto real añadiría tests más robustos, validaciones por entorno y despliegues condicionales según tags. El auto-merge puede ser útil, pero lo usaría sólo si hay confianza en los tests automatizados para evitar fusiones con errores.

---
