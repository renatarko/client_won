import { renderWithTheme } from "utils/tests/helpers";
import { Grid } from ".";

describe("<Grid/>", () => {
  it("chould render correctly", () => {
    const { container } = renderWithTheme(<Grid>Lorem ipsum</Grid>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        margin: 3.2rem 0;
        grid-template-columns: repeat(auto-fill,minmax(25rem,1fr));
        grid-gap: 3.2rem;
      }

      <div
        class="c0"
      >
        Lorem ipsum
      </div>
    `);
  });
});
