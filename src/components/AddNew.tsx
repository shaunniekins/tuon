"use client";

import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  Image,
} from "@nextui-org/react";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { GoFile } from "react-icons/go";
import { IoReload } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";
import { LessonComponent, ModuleComponent } from "./Tile";

const AddNewComponent = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const handleFile = (file: File) => {
    const validTypes = [
      "application/pdf",
      "application/epub+zip",
      "application/x-mobipocket-ebook",
    ];
    if (validTypes.includes(file.type)) {
      setFile(file);
      setPreview(URL.createObjectURL(file));
    } else {
      alert("Invalid file type. Please upload a PDF, EPUB, or MOBI file.");
    }
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      handleFile(uploadedFile);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleReset = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to reset the file?"
    );
    if (isConfirmed) {
      setFile(null);
      setPreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };
  return (
    <>
      <div className="h-[100svh] w-screen relative">
        <div className="absolute inset-0 z-0 flex flex-col justify-center items-center">
          <div className="w-full h-[40%] bg-white" />
          <div className="w-full h-[60%] bg-gray-50" />
        </div>
        <div className="absolute inset-0 z-10 flex flex-col justify-center pt-16 gap-5  container mx-auto">
          <div className="flex justify-between">
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-4xl font-bold">Create New Study Guide</h1>
              <p className="text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                color="primary"
                startContent={<MdOutlineDone />}
                onClick={() => {
                  router.push(`/course`);
                }}
                isDisabled={!file}
              >
                Continue
              </Button>
              <Button
                color="danger"
                startContent={<IoReload />}
                onClick={handleReset}
                isDisabled={!file}
              >
                Reset
              </Button>
            </div>
          </div>
          <div className="w-full h-[40rem] flex flex-col md:flex-row gap-5">
            <Card className="md:w-[40%]">
              <CardBody
                className="p-0 flex justify-center items-center"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
              >
                {preview ? (
                  <iframe
                    src={preview}
                    className="w-full h-full"
                    title="File Preview"
                  />
                ) : (
                  <>
                    <input
                      type="file"
                      accept=".pdf,.epub,.mobi"
                      onChange={handleUpload}
                      style={{ display: "none" }}
                      ref={fileInputRef}
                      id="fileUpload"
                    />
                    <label
                      htmlFor="fileUpload"
                      className="flex flex-col items-center gap-3"
                    >
                      <GoFile color="gray" size={"4rem"} />
                      <span>Drag and drop files here</span>
                      <span>- OR -</span>
                      <Button fullWidth onClick={triggerFileInput}>
                        Upload File
                      </Button>
                    </label>
                  </>
                )}
              </CardBody>
            </Card>

            <Card className="md:w-[60%]">
              <CardBody
                className={`${
                  !preview && "justify-center items-center p-0"
                } py-5 px-8 flex`}
              >
                {preview ? (
                  <div className="w-full">
                    <Accordion
                      //   isCompact
                      selectionMode="multiple"
                      defaultExpandedKeys={["1", "2", "3", "4", "5"]}
                      className="font-semibold"
                    >
                      <AccordionItem
                        key="1"
                        aria-label="Module 1: Introduction to Mass Storage"
                        title="Module 1: Introduction to Mass Storage"
                      >
                        <LessonComponent name="Lesson 1.1: The Need for Mass Storage" />
                        <LessonComponent name="Lesson 1.2: Hard Disk Drives (HDDs)" />
                        <LessonComponent name="Lesson 1.3: Performance Metrics" />
                        <LessonComponent name="Practice Quiz" />
                      </AccordionItem>
                      <AccordionItem
                        key="2"
                        aria-label="Module 2: Disk Scheduling Algorithms"
                        title="Module 2: Disk Scheduling Algorithms"
                      >
                        <LessonComponent name="Lesson 2.1: Introduction to Disk Scheduling" />
                        <LessonComponent name="Lesson 2.2: FCFS, SSTF, and SCAN" />
                        <LessonComponent name="Lesson 2.3: C-SCAN, LOOK, and C-LOOK" />
                        <LessonComponent name="Practice Quiz" />
                      </AccordionItem>
                      <AccordionItem
                        key="3"
                        aria-label="Module 3: Non-Volatile Memory and Wear Leveling"
                        title="Module 3: Non-Volatile Memory and Wear Leveling"
                      >
                        <LessonComponent name="Lesson 3.1: Introduction to Non-Volatile Memory" />
                        <LessonComponent name="Lesson 3.2: The Challenge of Wear Leveling" />
                        <LessonComponent name="Lesson 3.3: Wear Leveling Techniques" />
                        <LessonComponent name="Practice Quiz" />
                      </AccordionItem>
                      <AccordionItem
                        key="4"
                        aria-label="Module 4: Storage Attachment Methods"
                        title="Module 4: Storage Attachment Methods"
                      >
                        <LessonComponent name="Lesson 4.1: Host-Attached Storage" />
                        <LessonComponent name="Lesson 4.2: Network-Attached Storage (NAS)" />
                        <LessonComponent name="Lesson 4.3: Cloud Storage" />
                        <LessonComponent name="Practice Quiz" />
                      </AccordionItem>
                      <AccordionItem key="5" aria-label="Review" title="Review">
                        <LessonComponent name="Review Exam" />
                      </AccordionItem>
                    </Accordion>
                  </div>
                ) : (
                  <>
                    <Image src="/sad_worm.jpg" width={150} height={150} />
                    <h5 className="text-gray-500">Upload a file</h5>
                  </>
                )}
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewComponent;
