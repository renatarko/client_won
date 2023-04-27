import { renderWithTheme } from "utils/tests/helpers";
import { FormWrapper, LinkForm } from ".";

describe("<Form/>", () => {
  it("should render the heading", () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <LinkForm>
          My nice <a href="#">link</a>
        </LinkForm>
      </FormWrapper>
    );

    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 {
        color: #030517;
        text-align: center;
      }

      .c0 a {
        -webkit-text-decoration: none;
        text-decoration: none;
        color: #3CD3C1;
        border-bottom: 0.1rem solid #3CD3C1;
        margin-left: 0.3rem;
      }

      .c0 a:hover {
        color: #29b3a3;
        border-bottom: 0.1rem solid #29b3a3;
      }

      <body>
        <div>
          <div
            class=""
          >
            <div
              class="c0"
            >
              My nice 
              <a
                href="#"
              >
                link
              </a>
            </div>
          </div>
        </div>
      </body>
    `);
  });
});
