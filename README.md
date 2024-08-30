# Image Gallery

A modern image gallery application built with Next.js, TypeScript, and Tailwind CSS. This project allows users to search for images, apply filters, view image details, and manage favorites.

## Features

- **Search Functionality**: Search for images by keywords.
- **Image Filtering**: Apply filters to refine image search results.
- **Image Details**: View details of images including title and source.
- **Favorites Management**: Add images to favorites and view them on the profile page.
- **Responsive Design**: Mobile-friendly layout with Tailwind CSS.

## Installation

To set up the project on your local machine, follow these steps:

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Clone the Repository

```sh
git clone https://github.com/yourusername/image-gallery.git
cd image-gallery
```

### Install Dependencies

Using npm:

```sh
npm install
```

Using yarn:

```sh
yarn install
```

### Configure Environment Variables

Create a `.env.local` file in the root of the project and add your API key:

```env
NEXT_APP_API_KEY=your_api_key_here
```

To obtain an API key, sign up at [Serper Images API](https://google.serper.dev/image) and replace `your_api_key_here` with your actual API key.

### Running the Development Server

To start the development server, use the following command:

Using npm:

```sh
npm run dev
```

Using yarn:

```sh
yarn dev
```

Navigate to `http://localhost:3000` in your browser to view the application.

## Project Structure

- **`/app`**: Contains the main application components and pages.
- **`/components`**: Reusable components like `ImageCard`, `SearchBar`, `ImageFilter`, etc.
- **`/hooks`**: Custom hooks, including `useFetchImage`.
- **`/context`**: Context providers, such as `FavoritesContext`.
- **`/types`**: TypeScript type definitions.

## Configuration

- **Tailwind CSS**: Configuration is located in `tailwind.config.js`.
- **Next.js**: Configuration can be found in `next.config.js`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. For any issues or feature requests, please use the issue tracker on GitHub.

## Contact

For questions or feedback, you can reach me at [roman.micuda@outlook.com](mailto:roman.micuda@outlook.com).
