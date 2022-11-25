import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import { MenuModal } from "./MenuModal";
import userEvent from "@testing-library/user-event";

// beforeEach(() => {

// });
afterEach(cleanup);

test("list items should be rendered", () => {
  const container = render(<MenuModal />);
  const menuItems = container.getAllByRole("listitem");
  expect(menuItems).toHaveLength(3);
});

test("about should expand on click and get ready and disclaimer should collapse", async () => {
  const container = render(<MenuModal />);
  const about = container.getByLabelText(/about/i);

  userEvent.click(about);

  const aboutParagraph = await screen.findByText(/is a powerfull tool/i);
  const getReadyParagraph = screen.queryByText(
    /You can do breathing exercises standing up/i
  );
  const disclaimerParagraph = screen.queryByText(
    /The exercise information provided here is/i
  );

  expect(aboutParagraph).toBeInTheDocument();
  expect(getReadyParagraph).not.toBeInTheDocument();
  expect(disclaimerParagraph).not.toBeInTheDocument();
});

test("get ready should expand onclick", async () => {
  const container = render(<MenuModal />);
  const get_ready = container.getByLabelText(/Get ready/i);

  userEvent.click(get_ready);

  const getReadyParagraph = await screen.findByText(
    /You can do breathing exercises standing up/i
  );
  const aboutParagraph = screen.queryByText(/is a powerfull tool/i);
  const disclaimerParagraph = screen.queryByText(
    /The exercise information provided here is/i
  );

  expect(getReadyParagraph).toBeInTheDocument();
  expect(disclaimerParagraph).not.toBeInTheDocument();
  expect(aboutParagraph).not.toBeInTheDocument();
});

test("disclaimer should expand onclick", async () => {
  const container = render(<MenuModal />);
  const disclaimer = container.getByLabelText(/disclaimer/i);
  userEvent.click(disclaimer);

  const disclaimerParagraph = await screen.findByText(
    /The exercise information provided here is/i
  );
  const aboutParagraph = screen.queryByText(/is a powerfull tool/i);
  const getReadyParagraph = screen.queryByText(
    /You can do breathing exercises standing up/i
  );

  expect(disclaimerParagraph).toBeInTheDocument();
  expect(getReadyParagraph).not.toBeInTheDocument();
  expect(aboutParagraph).not.toBeInTheDocument();
});
