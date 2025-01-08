import React, { useState } from 'react'

const Faq = ({ major_content, minor_content }) => {
  const [isOpened, setOpened] = useState(false);

  return (
    <>
      <div class="accordion-item">
        <h6 class="accordion-header" id="faqOne">
          <button onClick={() => setOpened(!isOpened)} class={`${isOpened ? 'accordion-button' : 'accordion-button collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            <span class="accordion-headerText">{major_content}</span>
          </button>
        </h6>
        {isOpened && (
          <div class=".accordion-collapse .collapse" aria-labelledby="faqOne" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              <p>{minor_content}</p>
            </div>
          </div>

        )}
      </div>
    </>
  )
}

export default Faq
