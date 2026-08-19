# Hamdi Rebhi — Lead Embedded Software Engineer &amp; IoT / Flutter Developer

A modern, minimalist developer portfolio website built with strictly vanilla HTML5, CSS3, and JavaScript — zero dependencies or build step overhead.

---

## ⚡ Overview

- **Engineer**: Hamdi Rebhi
- **Current Role**: Lead Embedded Software Engineer at **GeWinner**
- **Experience**: 3+ Years in MCU / Silicon Firmware &amp; Full-Stack IoT Development
- **Core Focus**:
  - **Firmware &amp; Embedded**: C/C++ (C11/C++17), Zephyr RTOS, FreeRTOS, STM32 (ARM Cortex-M4/M7), Nordic Semiconductor nRF52840, Panasonic PAN1780
  - **Protocols &amp; Buses**: BLE 5.0/5.3 GATT, I2C (TCA9548A Mux), SPI DMA, CAN/CAN-FD, UART/RS-485
  - **Cross-Platform &amp; Full-Stack**: Flutter (iOS, Android, Desktop), NestJS, MongoDB, n8n Automation, Wan AI Video Generation
- **Offerings**: Available for End-to-End IoT, Embedded &amp; Flutter Projects

---

## 🛠 Project Structure

```tree
myPersonalWebsite/
├── Assets/
│   └── profile_photo.jpeg   # Profile imagery
├── index.html               # Semantic HTML5 markup (Hero, Arsenal, Projects, Media & Contact)
├── style.css                # Slate-Blue Dark IDE & Light responsive theme with CSS variables
├── main.js                  # Vanilla JavaScript for smooth scroll, theme toggle & clipboard
└── README.md                # Project documentation & profile overview
```

---

## 🔬 Featured Projects

1. **`chaiserelante` — Active Safety &amp; Collision Avoidance System**
   - Wheelchair security system utilizing a Nordic nRF52 microcontroller and an I2C multiplexer (TCA9548A) interfacing an array of 7 ultrasonic distance sensors.
   - Built on Zephyr RTOS with deterministic multi-zone emergency slowdown and automated braking (< 15ms).

2. **`rinPen` — Digital Air-Writing Smart Stylus &amp; 6-DOF Motion Tracker**
   - Compact spatial motion tracker based on the Panasonic PAN1780 module (Nordic nRF52840 SoC).
   - Real-time 6-axis IMU kinematic filtering and low-latency stroke vector streaming over custom BLE GATT services.

3. **`monomotion` — AI Fitness Coach &amp; Generative Workout Platform**
   - Full-stack AI fitness coaching ecosystem featuring a reactive **Flutter** client and scalable **NestJS** + **MongoDB** backend.
   - Orchestrates automated coaching workflows via **n8n** and synthesizes on-demand exercise demonstration videos using the **Wan** AI video model.

---

## ✍ Writing &amp; Media

### 📰 Medium Articles ([@hamdi22rebhk](https://medium.com/@hamdi22rebhk))
- [10 Essential Coding Rules for C/C++ in Embedded Systems](https://medium.com/@hamdi22rebhk/10-essential-coding-rules-for-c-c-in-embedded-systems-e8be3854e8e5)
- [Zephyr RTOS on STM32: Surviving the Setup and Blinking an LED](https://medium.com/@hamdi22rebhk/zephyr-rtos-on-stm32-surviving-the-setup-and-blinking-an-led-536bdd3c142b)
- [🐞 Chasing a Performance Regression with Git, WinMerge, and Patience](https://medium.com/@hamdi22rebhk/chasing-a-performance-regression-with-git-winmerge-and-patience-ee4b14de3a57)

### 🎥 YouTube Channel ([@hamdirebhi6828](https://www.youtube.com/@hamdirebhi6828))
- Embedded engineering walkthroughs, microcontroller hardware bring-up, oscilloscopes, and Zephyr RTOS tutorials.

---

## 🌐 Connect &amp; Links

- **Email**: [hamdi.rebhi@gewinner.com](mailto:hamdi.rebhi@gewinner.com)
- **LinkedIn**: [Hamdi Rebhi on LinkedIn](https://www.linkedin.com/in/hamdi-rebhi-a7131a169/)
- **YouTube**: [Hamdi Rebhi on YouTube](https://www.youtube.com/@hamdirebhi6828)
- **Medium**: [Hamdi Rebhi on Medium](https://medium.com/@hamdi22rebhk)

---

## 🚀 Running Locally

No dependencies or build steps required. Simply open [`index.html`](index.html) directly in your browser or run:

```bash
# Python 3
python -m http.server 8000
```
