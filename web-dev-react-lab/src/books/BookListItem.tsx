import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import { useState } from "react";
import type { BookModel, UpdateBookModel } from "./BookModel";

interface BookListItemProps {
  book: BookModel;
  onDelete(): void;
  onUpdate(input: UpdateBookModel): void;
}

export function BookListItem({ book, onDelete, onUpdate }: BookListItemProps) {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(book.title);

  const onCancel = () => {
    setNewTitle(book.title);
    setEditMode(false);
  };

  const onSave = () => {
    onUpdate({ title: newTitle });
    setEditMode(false);
  };

  return (
    <Row justify="space-between" style={{ width: "100%", padding: ".25rem 0" }}>
      <Col span={12}>
        {editMode ? (
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        ) : (
          <b>{book.title}</b>
        )}
      </Col>
      <Col span={6}>
        <Row gutter={[4, 0]}>
          {editMode ? (
            <>
              <Col>
                <Button color="primary" variant="solid" onClick={onSave}>
                  <CheckOutlined />
                </Button>
              </Col>
              <Col>
                <Button color="primary" variant="outlined" onClick={onCancel}>
                  <CloseOutlined />
                </Button>
              </Col>
            </>
          ) : (
            <Col>
              <Button
                color="primary"
                variant="solid"
                onClick={() => setEditMode(true)}
              >
                <EditOutlined />
              </Button>
            </Col>
          )}
          <Col>
            <Button color="danger" variant="solid" onClick={onDelete}>
              <DeleteOutlined />
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
