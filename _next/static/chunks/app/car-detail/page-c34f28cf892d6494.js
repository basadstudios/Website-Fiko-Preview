(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[611],{3152:(e,t,s)=>{"use strict";s.d(t,{default:()=>u});var l=s(5155),r=s(2115),o=s(5695),i=s(8401),a=s(2809),n=s(6874),c=s.n(n),d=s(823),x=s(9911);function m(){return(0,l.jsx)(d.default,{children:(0,l.jsx)("div",{className:"min-h-[70vh] flex items-center justify-center bg-black text-white",children:(0,l.jsxs)("div",{className:"container mx-auto px-4 py-16 text-center",children:[(0,l.jsx)("h1",{className:"text-6xl md:text-8xl font-bold text-gold-500 mb-6",children:"404"}),(0,l.jsx)("div",{className:"w-20 h-1 bg-gold-500 mx-auto mb-8"}),(0,l.jsx)("h2",{className:"text-2xl md:text-3xl font-bold text-white mb-6",children:"Page Not Found"}),(0,l.jsx)("p",{className:"text-gray-400 max-w-xl mx-auto mb-12",children:"The luxury experience you're looking for might have been moved, renamed, or is temporarily unavailable."}),(0,l.jsxs)("div",{className:"flex flex-col md:flex-row gap-6 justify-center",children:[(0,l.jsxs)(c(),{href:"/",className:"inline-flex items-center justify-center px-6 py-3 bg-gold-500 text-black font-semibold rounded-md hover:bg-gold-600 transition-colors",children:[(0,l.jsx)(x.rQ8,{className:"mr-2"}),"Return to Homepage"]}),(0,l.jsxs)(c(),{href:"/cars",className:"inline-flex items-center justify-center px-6 py-3 bg-black text-gold-500 border border-gold-500 rounded-md hover:bg-gold-500 hover:text-black transition-colors font-semibold",children:[(0,l.jsx)(x.Y4E,{className:"mr-2"}),"View Our Collection"]}),(0,l.jsxs)(c(),{href:"/contact",className:"inline-flex items-center justify-center px-6 py-3 bg-black/20 border border-gray-700 text-white rounded-md hover:border-gold-500 hover:text-gold-500 transition-colors",children:[(0,l.jsx)(x.maD,{className:"mr-2"}),"Contact Us"]})]})]})})})}function u(){let e=(0,o.useSearchParams)(),[t,s]=(0,r.useState)(null),[n,c]=(0,r.useState)(!0),[d,x]=(0,r.useState)(!1),[u,h]=(0,r.useState)("");return((0,r.useEffect)(()=>{let t=e.get("id");if(h("Looking for car ID: ".concat(t)),t){let e=(0,i.QJ)().find(e=>e.id===t);e?(s(e),document.title="".concat(e.year," ").concat(e.make," ").concat(e.model," | Fiko Luxury Automobiles")):(x(!0),document.title="Car Not Found | Fiko Luxury Automobiles")}else x(!0),document.title="Car Not Found | Fiko Luxury Automobiles";c(!1)},[e]),(0,r.useEffect)(()=>{if(u){let e=setTimeout(()=>{h("")},5e3);return()=>clearTimeout(e)}},[u]),n)?(0,l.jsx)("div",{className:"min-h-[60vh] flex items-center justify-center",children:(0,l.jsx)("div",{className:"animate-pulse text-gold-500 text-xl",children:"Loading luxury details..."})}):d||!t?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m,{}),u&&(0,l.jsx)("div",{className:"fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded text-sm z-50",children:u})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.default,{carId:t.id}),u&&(0,l.jsx)("div",{className:"fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded text-sm z-50",children:u})]})}},8565:(e,t,s)=>{Promise.resolve().then(s.bind(s,3152)),Promise.resolve().then(s.bind(s,823))}},e=>{var t=t=>e(e.s=t);e.O(0,[711,454,766,823,809,441,684,358],()=>t(8565)),_N_E=e.O()}]);