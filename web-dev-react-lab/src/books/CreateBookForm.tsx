import { PlusOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import { useState } from "react";
import type { CreateBookModel } from "./BookModel";

interface CreateBookFormProps {
  onCreate(input: CreateBookModel): void;
}

export function CreateBookForm({ onCreate }: CreateBookFormProps) {
  const [title, setTitle] = useState<string>("");

  const onValidate = () => {
    onCreate({ title });
    setTitle("");
  };

  return (
    <Space orientation="horizontal">
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button
        color="primary"
        icon={<PlusOutlined />}
        variant="solid"
        onClick={onValidate}
        disabled={!title?.length}
      >
        Create book
      </Button>
    </Space>
  );
}
