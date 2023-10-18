import { Component } from '@angular/core';

// elf 4 components
import '@elf/emerald-grid';
import '@elf/emerald-grid/themes/halo/light';
import '@elf/elf-theme-halo/light/imports/native-elements';

// elf 7 components
import '@refinitiv-ui/elements/select';
import '@refinitiv-ui/halo-theme/light/imports/native-elements';
import '@refinitiv-ui/elements/select/themes/halo/light';

import { CompositeGrid } from 'tr-grid';
import { Select } from '@refinitiv-ui/elements/select';
import { ItemData } from '@refinitiv-ui/elements/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  selectItems: ItemData[] = ['Option1', 'Option2', 'Option3'].map((item) => ({
    value: item,
    label: item,
  }));

  data: any[] = [
    [
      1,
      'This two has some tooltip for demo',
      '1',
      '1',
    ],
    [
      2,
      'This one dxfcgvhbjnkmnbhvgcfdfghbjn',
      '2',
      '2',
    ],
    [
      3,
      'No tooltip',
      '3',
      '3',
    ],
    [
      4,
      'Placerat sapien, ut',
      '4',
      '4',
    ],
    [
      5,
      'Molestie, efficitur ex quis, vehicula enim',
      '5',
      '5',
    ],
  ];

  columns: CompositeGrid.Column[] = [
    {
      title: '#',
      field: 'first',
      width: 30,
    },
    { title: 'Text', field: 'second' },
    {
      title: 'First Select',
      field: 'third',
      formatter: this.newSelectFormatter(this.selectItems),
    },
    {
      title: 'Second Select',
      field: 'forth',
      formatter: this.newSelectFormatter(this.selectItems),
    },
  ];

  config: CompositeGrid.Options = {};

  newSelectFormatter(selectItems: ItemData[]): CompositeGrid.ColumnFormatter {
    return {
      render: (): void => {},
      bind: (
        rowIndex: number,
        columnIndex: number,
        value: string,
        cell: any
      ): void => {
        let element = cell.getContent() as Select;
        if (!element) {
          element = document.createElement('ef-select');
          element.style.width = '100%';
          element.data = selectItems;
          // input.addEventListener('click', () => {
          //     input.blur();
          // });
        }
        cell.setContent(element);
      },
    };
  }
}
