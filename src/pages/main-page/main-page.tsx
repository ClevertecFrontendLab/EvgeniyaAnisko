import React from 'react';

import './main-page.css';
import { Button, Card, Col, List, Row, Typography } from 'antd';
import { CalendarOutlined, HeartFilled, TrophyFilled } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';

const data = [

    'планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;',
    'отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;',
    'создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;',
    'выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.'

];

export const MainPage: React.FC = () => {

    return (
        <div className='main-page-wrapper'>
            <Card className='main-page-block'
            bordered={false}
            >
                <List
                    className='main-page-block-list'
                    header={'С CleverFit ты сможешь:'}
                    bordered={false}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item className='main-page-block-list-item'>
                            <Typography.Text mark>—</Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </Card>
            <Card className='main-page-block' bordered={false}>
                <Title level={4} className='card-legacy'>
                    CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!
                </Title>
            </Card>

            <div className='site-card-border-less-wrapper main-page-block'>
                <div className="site-card-wrapper">
                    <Row gutter={16} >
                        <Col span={8}>
                            <Card size='small' title="Расписать тренировки" bordered={false}>
                                <Button size='small' type='text' style={{color: '#2F54EB'}} block icon={<HeartFilled  />}>Тренировка</Button>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card size='small' title="Назначить календарь" bordered={false}
                            >
                                <Button size='small' type='text' style={{color: '#2F54EB'}} block icon={<CalendarOutlined />}>Календарь</Button>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card size='small' title="Заполнить профиль" bordered={false}>
                                <Button size='small' type='text'  style={{color: '#2F54EB'}} block icon={<TrophyFilled />}>Профиль</Button>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};
