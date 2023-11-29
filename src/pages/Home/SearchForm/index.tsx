import { Button, Form, FormInstance, FormProps, Select, Space } from 'antd';
import { DefaultOptionType } from 'antd/es/select';

import { CITY_OPTIONS } from 'src/pages/Home/cities';

type SearchFormProps = Omit<FormProps, 'form'> & {
  formInstance: FormInstance;
};

export function SearchForm({ formInstance, ...rest }: SearchFormProps) {
  const selectedOrigin = Form.useWatch<string | undefined>('origem', formInstance);

  return (
    <Form form={formInstance} layout="vertical" onFinish={console.log} {...rest}>
      <Form.Item label="Origem" name="origem" rules={[{ required: true }]} required>
        <Select
          options={CITY_OPTIONS}
          placeholder="Selecione uma cidade"
          autoFocus
          showSearch
          onSelect={(newOrigin: string) => {
            if (newOrigin === formInstance.getFieldValue('destino')) {
              formInstance.setFieldValue('destino', undefined);
            }
          }}
        />
      </Form.Item>

      <Form.Item label="Destino" name="destino" rules={[{ required: true }]} required>
        <Select
          options={CITY_OPTIONS.map(microRegion => ({
            ...microRegion,
            options: microRegion.options.filter((city: DefaultOptionType) => city.value !== selectedOrigin),
          }))}
          placeholder="Selecione uma cidade"
          showSearch
        />
      </Form.Item>

      <Form.Item initialValue="Carro" label="Veículo" name="veiculo" rules={[{ required: true }]} required>
        <Space.Compact style={{ width: '100%' }}>
          <Select
            options={[
              { label: 'Carro', value: 'Carro' },
              { label: 'Caminhão', value: 'Caminhão' },
              { label: 'Motocicleta', value: 'Motocicleta' },
              { label: 'Micro-ônibus', value: 'Micro-ônibus' },
              { label: 'Ônibus', value: 'Ônibus' },
            ]}
            showSearch
          />

          <Button htmlType="submit" type="primary">
            Calcular
          </Button>
        </Space.Compact>
      </Form.Item>
    </Form>
  );
}
