# FACT Lab 2008A Seating Directory

An interactive 2D and 3D directory for the FACT Lab workspace at HKUST. It helps lab members, visiting scholars, and guests understand the room layout and find people by workstation.

## Live site

[Open the seating directory](https://m-ethereal.github.io/fact-lab-seating-directory/)

## Features

- Interactive 3D room layout with a 2D overview
- Workstation numbering and member assignments
- Role-based highlighting and member detail panels
- English and Chinese interface
- Responsive desktop and mobile presentation

## Repository structure

```text
.
├── index.html                  # Public website and 3D visualization
└── assets
    ├── images                  # FACT Lab marks used by the interface
    └── js
        └── seating-data.js     # Public workstation directory data
```

The development model, calibration floor plans, furniture references, and temporary working files are intentionally kept outside this public repository.

## Updating seating assignments

Edit `assets/js/seating-data.js`. Each key from `S01` through `S28` corresponds to the workstation number shown in the visualization. Use `{ status: 'vacant' }` for an available workstation.

## Local preview

Serve this directory with any static HTTP server, then open `index.html`. ES modules do not work reliably when the file is opened directly with a `file://` URL.

## Data and attribution

Public profile details and profile images link to the [FACT Lab website](https://fact-lab.hkust.edu.hk/). FACT Lab branding and third-party profile images remain the property of their respective owners. This repository does not grant additional reuse rights for those assets.
