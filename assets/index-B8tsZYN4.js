import{j as r,r as l}from"./react-56DGgGmo.js";import{c as a}from"./react-dom-D1yR8Rv7.js";import{c as u,R as d}from"./react-router-dom-FiK-KhoS.js";import{b as f}from"./react-router-CeY-9j8D.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-B0cdNcNh.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="_container_hij9o_4",p={container:m},h=()=>r.jsx("div",{className:p.container,children:"Hello World!"}),y=()=>{const{pathname:n}=f();return l.useEffect(()=>{window.scrollTo(0,0)},[n]),null},g=u([{path:"/",element:r.jsxs(r.Fragment,{children:[r.jsx(y,{}),r.jsx(h,{})]})}]),j=()=>r.jsx(d,{router:g}),x=()=>r.jsx(j,{});a(document.getElementById("root")).render(r.jsx(x,{}));