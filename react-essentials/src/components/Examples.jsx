import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = 'Click a button';
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }

  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic === 'components'}
          onSelect={() => handleSelect('components')}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'jsx'}
          onSelect={() => handleSelect('jsx')}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'props'}
          onSelect={() => handleSelect('props')}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'state'}
          onSelect={() => handleSelect('state')}
        >
          State
        </TabButton>
      </menu>
      {!selectedTopic ? (
        <p>Please select a topic</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>{EXAMPLES[selectedTopic].code}</pre>
        </div>
      )}
    </Section>
  );
}
