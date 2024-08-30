# Responsive Image Gallery with Next.js and Tailwind CSS

This project is a simple image gallery built with Next.js 14 and styled using Tailwind CSS. The gallery demonstrates various Tailwind CSS utilities for layout, responsive design, and styling. The images used in the gallery are sourced from placeholder services or downloaded from free image sites.

## Features

- Responsive layout using Tailwind CSS utilities.
- Image aspect ratio management with `aspect-w` and `aspect-h`.
- Image object fit and positioning.
- Responsive columns and spacing.
- Use of Tailwind CSS utilities for overflow, visibility, and positioning.

## Setup

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v14 or later)
- npm (or yarn)

### Clone the Repository

```bash
git clone https://github.com/your-username/my-tailwind-gallery.git
cd my-tailwind-gallery
```

### Install Dependencies

Install the necessary npm packages:

```bash
npm install
```

### Configure Tailwind CSS

Tailwind CSS is already set up. If you want to customize the configuration, you can edit the `tailwind.config.js` file.

### Add Images

- **Placeholder Images**: If you're using placeholder images, no additional setup is required.
- **Actual Images**: If you have downloaded images, place them in the `public/images/` directory.

### Start the Development Server

Run the development server to see your project in action:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the gallery.

## Tailwind CSS Utilities Used

- **Layout**: `container`, `columns-{n}`
- **Aspect Ratio**: `aspect-w-{n}`, `aspect-h-{n}`
- **Box Decoration**: `box-decoration-break`
- **Box Sizing**: `box-border`, `box-content`
- **Display**: `block`, `inline-block`, etc.
- **Positioning**: `absolute`, `relative`, `top-{n}`, `left-{n}`
- **Visibility**: `visible`, `invisible`, `hidden`
- **Overflow**: `overflow-auto`, `overflow-hidden`
- **Z-Index**: `z-{n}`

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes. Ensure that your changes are well-tested and include appropriate documentation.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
