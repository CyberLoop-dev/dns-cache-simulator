<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:08131f,100:0891b2&height=170&section=header&text=DNS%20Cache%20Simulator&fontColor=ecfeff&fontSize=38" width="100%" alt="DNS Cache Simulator banner"/>
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&pause=900&color=67E8F9&center=true&vCenter=true&width=620&lines=Explore+TTL+and+cache+hits;Simulate+negative+caching+and+LRU" alt="Animated tagline"/>
<p><strong>A local, interactive DNS cache model with a controllable clock.</strong></p>
<img src="https://img.shields.io/github/license/CyberLoop-dev/dns-cache-simulator?style=flat-square" alt="License"/> <img src="https://img.shields.io/github/languages/top/CyberLoop-dev/dns-cache-simulator?style=flat-square" alt="Language"/> <img src="https://img.shields.io/github/stars/CyberLoop-dev/dns-cache-simulator?style=flat-square" alt="Stars"/> <img src="https://img.shields.io/github/last-commit/CyberLoop-dev/dns-cache-simulator?style=flat-square" alt="Last commit"/>
<br/><img src="./assets/mark.svg" width="90%" alt="DNS cache lifecycle illustration"/>
</div>

## 🧭 Overview
DNS Cache Simulator models a small resolver cache without sending network queries. Add positive or negative records, advance virtual time, and observe TTL expiry and least-recently-used eviction.

## ✨ Features
- ⏱️ Advance a virtual clock to expire records deterministically.
- 🧊 Inspect cache hits, misses, and remaining TTL.
- 🚫 Model negative (NXDOMAIN) caching.
- ♻️ Observe LRU eviction at a fixed capacity.
- 🔒 Keep all simulation data in the browser.

## 🎬 Demo
Start the local app. Two sample records are loaded automatically; look them up, advance time, or add your own hostname and TTL.

## 🚀 Quick Start
Requires Node.js 20 or newer.

```bash
npm start
```

Open http://127.0.0.1:4174. Run checks with `npm test`.

## 🧰 Tech Stack
- 🟢 Node.js built-in HTTP server
- 🌐 HTML, CSS, and JavaScript modules
- 🧪 Node.js built-in test runner

## 🗂️ Folder Structure
```text
public/       Simulator interface and cache model
test/         Cache behavior tests
assets/       Original SVG artwork
.github/      CI workflow
server.js     Dependency-free static server
```

## 🛣️ Roadmap
- [ ] Add configurable cache capacity.
- [ ] Compare FIFO and LRU eviction.
- [ ] Export simulation traces as JSON.

## 🤝 Contributing
Contributions are welcome. Keep time deterministic in tests and make the difference between a simulated cache and real DNS resolution explicit.

## 📄 License
MIT. See [LICENSE](./LICENSE).

<div align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:0891b2,100:08131f&height=100&section=footer" width="100%" alt="Animated wave footer"/></div>
