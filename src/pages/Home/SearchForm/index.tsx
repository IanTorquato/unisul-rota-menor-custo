import { Button, Flex, Form, FormInstance, FormProps, Select, Space, Spin, Typography, notification } from 'antd';
import { DefaultOptionType } from 'antd/es/select';

import { useLowestCostRoute } from 'src/contexts/LowestCostRoute';
import { LowestCostRouteType } from 'src/contexts/LowestCostRoute/types';
import { api } from 'src/core/api';
import { useToggle } from 'src/hooks/useToggle';
import { CITY_OPTIONS } from 'src/pages/Home/cities';

import './styles.scss';

type SearchFormProps = Omit<FormProps, 'form'> & {
  formInstance: FormInstance;
};

export function SearchForm({ formInstance, ...rest }: SearchFormProps) {
  const [isLoading, toggleIsLoading] = useToggle(false);

  const selectedOrigin = Form.useWatch<string | undefined>('origem', formInstance);

  const { setLowestCostRoute } = useLowestCostRoute();

  const handleSubmit = async (dados: unknown) => {
    toggleIsLoading(true);

    try {
      const response = await api.get<LowestCostRouteType>('/rota-menor-custo', { params: dados });

      setLowestCostRoute(response.data);
    } catch (error) {
      notification.error({
        duration: 8,
        message: 'Algo de errado não está certo',
        description: (
          <>
            Se não gostou,{' '}
            <Typography.Link href="https://github.com/IanTorquato/unisul-rota-menor-custo" referrerPolicy="no-referrer" target="_blank">
              acessa o código
            </Typography.Link>{' '}
            e corrige 💖
          </>
        ),
      });
    }

    toggleIsLoading(false);
  };

  return (
    <Form className="container-search-form" disabled={isLoading} form={formInstance} layout="vertical" onFinish={handleSubmit} {...rest}>
      <Spin spinning={isLoading}>
        <Flex justify="center">
          <Typography.Title level={2}>Para onde vamos hoje?</Typography.Title>
        </Flex>

        <Form.Item label="Origem" name="origem" rules={[{ required: true }]} required>
          <Select
            options={CITY_OPTIONS}
            placeholder="Selecione uma cidade"
            autoFocus
            showSearch
            onSelect={(newOrigin: string) => {
              const selectedDestino = formInstance.getFieldValue('destino');

              if (!selectedDestino) {
                (formInstance.getFieldInstance('destino') as HTMLSelectElement | undefined)?.focus();
              } else if (newOrigin === selectedDestino) {
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

        <Form.Item label="Veículo" rules={[{ required: true }]} required>
          <Space.Compact style={{ width: '100%' }}>
            <Form.Item initialValue="Carro" name="veiculo" style={{ width: '100%' }}>
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
            </Form.Item>

            <Button htmlType="submit" type="primary">
              Calcular rota
            </Button>
          </Space.Compact>
        </Form.Item>
      </Spin>
    </Form>
  );
}
