import React from "react";
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

type Props = {};

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Button } from "./ui/button";
import MessageForm from "./MessageForm";

export const ContactDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant={"default"}
          className="p-6 px-8  text-md rounded-full bg-gray-900 text-white"
        >
          Contact
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {" "}
            <h3 className="section-subtitle text-4xl pb-4">
              Get in <span className="text-blue">Contact</span>
            </h3>
          </DialogTitle>
          <DialogDescription>
            <MessageForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
