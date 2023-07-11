import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <footer className="bg-gray-300 p-6 fixed inset-x-0 bottom-0 mt-2">
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; {new Date().getFullYear()} Cicla+
      </Typography>
    </footer>
  );
}
