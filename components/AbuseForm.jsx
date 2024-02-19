"use client";
import { Button, Input } from "@nextui-org/react";
import {
  FaChevronCircleDown,
  FaExclamationTriangle,
  FaPencilAlt,
} from "react-icons/fa";
import { useState, useMemo } from "react";
import { Spacer } from "@nextui-org/react";

import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Textarea,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { HiChevronDown } from "react-icons/hi";

export const AbuseForm = () => {
  const [selectedKeys, setSelectedKeys] = useState(["Select Abuse Type"]);

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Card isBlurred={false} className="loginForm">
      <CardHeader>
        <h4 className="text-2xl font-bold dark:text-white flex flex-row items-center gap-2 justify-center w-full">
          <FaExclamationTriangle />
          Report
        </h4>
      </CardHeader>
      <CardBody>
        <Divider />
        <Spacer y={4} />
        <Input
          type="text"
          label="Title"
          placeholder="Promoting harmful content"
        />
        <Spacer y={4} />
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered" className="capitalize w-full">
              <HiChevronDown />
              {selectedValue}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Abuse Type"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
          >
            <DropdownItem key="Harmful Content">Harmful Content</DropdownItem>
            <DropdownItem key="Impersonation">Impersonation</DropdownItem>
            <DropdownItem key="Spam">Spam</DropdownItem>
            <DropdownItem key="Cyberbullying / Harassment">
              Cyberbullying / Harassment
            </DropdownItem>
            <DropdownItem key="Other">Other</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Spacer y={4} />
        <p>Please enter the link of the offending page</p>
        <Spacer y={4} />
        <Input
          type="url"
          label="Page URL"
          placeholder="cloutcard.io/u/username"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">https://</span>
            </div>
          }
          autoFocus
        />

        <Spacer y={4} />
        <Textarea
          label="Description"
          placeholder="Enter your description"
          className="max-w"
        />
        <Spacer y={4} />
        <Button
          color="primary"
          variant="solid"
          size="lg"
          className="header__ctaButton"
          startContent={<FaPencilAlt />}
        >
          Submit Report
        </Button>
        <Spacer y={4} />
      </CardBody>
    </Card>
  );
};
